let Gsignin = () =>
{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(provider);
    })
   
}