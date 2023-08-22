

/////* start firebase */////

/*1*/
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js';
import { getFirestore, collection, getDocs,getDoc, setDoc, addDoc, doc,query,where } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js';

// TODO: Replace the following with your app's Firebase project configuration
import { firebaseConfig } from '../firebase.js';

// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let X;

async function getCit(db,X) {
  const citiesCol = collection(db,`${X}`);
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
/*1*/






/*Start Sing In*/


document.querySelector(".btn-sign-in").addEventListener("click",async()=>{
    let username =  document.querySelector(".username-in").value
    let password =  document.querySelector(".password-in").value
    

    if (username.trim()!==""&&password.trim()!=="") {

        Swal.fire({
            title: 'Please Wait!',
            didOpen: () => {Swal.showLoading()}
        });

        const q = query(collection(db, "accounts"), where("username", "==", `${username}`), where("password", "==", `${password}`));

        const querySnapshot = await getDocs(q);
        if(querySnapshot.docs.length==0){
            Swal.fire("","Usename Or Password Are Wrong","error");
        }
        querySnapshot.forEach((doc) => {  
            if(doc.data().id!==undefined){
                document.querySelector(".username-in").value=""
                document.querySelector(".password-in").value=""
                /**/
                localStorage.setItem("file-upload-person-id",doc.data().id);
                /**/
                location.href="../index.html";
            } else {
                Swal.fire("","Usename Or Password Are Wrong","error");
            }
        });

    } else {Swal.fire("","Enter Usename And Password","error")}

})

/*End Sing In*/





/////* end firebase */////






/* start create account */

* start create account */

document.querySelector(".btn-sign-up").addEventListener("click", () => {
   Swal.fire(
      'Account Creation Disabled 😥',
       'Sorry, account creation is currently disabled for New Users, if you already has an account you can sign in with it. 😥',
        'warning'
    );
});

/* end create account */



// await getDoc(doc(db, "accounts", "L8tRIutxitBgha5OdTby")).then(e=>cs(e.data()))



