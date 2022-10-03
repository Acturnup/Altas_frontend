
const apiURL ='https://jsonplaceholder.typicode.com'; // creates short cut
async function fetchPosts(){ //returns a promise
    try{ // add try because it is throwing an error
    const response =await fetch(`${apiURL}/posts`); // responses to posts
        

    if (!response.ok){ // if not okay send a error
        throw new Error(`Failed to fetch post: ${response.status}`) //throwing error
    }


        return await response.json(); // return repsonse
} catch(e){ // catch error if after it is thrown 
    console.log(e); // says the error in console
}

}

function listsPosts(postContainerElementId){ // function for listposts
    const postContainerElement= document.getElementById(postContainerElementId); // creates const that gets the 
    // element by ID connected as a parameter for the function 

    if(!postContainerElement){ // if not the const postContainerElement it will return;
        return;
    }

    fetchPosts() // uses the function fetch post runs it and if not post says in the innerHTML not post fetched
    .then(posts =>{
        if(!posts){
            postContainerElement.innerHTML = 'No posts fetched.';
            return;
        }
                    // creates post 
        for(const post of posts){
            postContainerElement.appendChild(postElement(post)); // postelement is fucntion and post is a function parameter 

        }


    }) 
    // catches error and says it 
    .catch(e => {
    console.log(e);
    })
}

function postElement(post){ // creates function and parameter
    const anchorElement = document.createElement('a'); //creating texts for link
    anchorElement.setAttribute('href',`${apiURL}/posts/${post.id}`); //calling post form website and calling the ID , making a link 
    anchorElement.setAttribute('target', '_blank') // open in new tab
    anchorElement.innerText = post.title; // post the title of the TEXT and adds it into the innerHTML

    const postTitleElement = document.createElement('h3'); // create h3
    postTitleElement.appendChild(anchorElement); // uses  new created element 'h3' and appeneds a child which calls the anchorelement 
                                                    // basically making sure it is using the attributes of anchorelement

    return postTitleElement; // returns the h3 element

}
