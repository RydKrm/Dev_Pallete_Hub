 export interface userInterface {
    _id:number,
    name: string,
    title:string,
    image:string,
    totalQuestion:number,
    totalProject:number,
    totalBlog:number,
    totalTutorial:number,
    totalAnswer:number
 }

 export interface registerInterface {
   name:string,
   email:string,
   password:string
 }

export interface GoogleLogInterface {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
}

export interface AuthContextProps {
  user: GoogleLogInterface | null;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}