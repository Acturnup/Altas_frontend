require ('esbuild')
.build ({
    entryPoints: ['js/main.js'],
    outfile: 'bundle.js',
    bundle: true,
    watch: true,
    sourcemap: true,

    // onRebuild(error,result){
    //     if(error)
    //     console.error(error);
        
    //  else {
    //     console.log
    // }
})
.then(() => console.log('watching...'))
.catch (() => process.exit(1));