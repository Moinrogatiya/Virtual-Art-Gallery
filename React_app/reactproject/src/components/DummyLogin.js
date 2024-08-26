import { useReducer, useState } from "react"
import LoginComp from "./LoginPage"
import { Form, useNavigate } from "react-router-dom"

const init ={
    uname :"",
    pwd :""
}

const reducer =(state,action) => {
    switch(action.type){
    case 'update':
        return { ...state ,[action.fld] : action.val};
        break;
    case 'init':
        return init;

    }
}
export default function DummyLogin(){   
    const[user ,dispatch] =useReducer(reducer,init);
    const[msg , setMsg] =useState("msg");
    const[emsg , setEmsg] =useState("error msg");

    const navigate =useNavigate();

    const submitHandle =(e)=>{
        e.preventDefault();
        const reqData ={
            method:'POST',
            headers :{'content-type' : 'application/json'},
            body :JSON.stringify(
                {
                    username : user.uname,
                    password : user.pwd

                }
            )
        }
        fetch("https://localhost:44375/api/UserManagement/VerifyLogin" ,reqData)
        .then (resp =>{ if(resp.ok){
          return resp.json();
        }
        else
        {
          throw new Error("Server error");
        }
        })
        .then(obj =>{
                      if(obj === null)
                      {
                        setMsg("wrong Password");
                      }
                      else
                      {
                        if(obj.status === false)
                        {
                          alert("request has not approved");
                          navigate("/login");
                        }
                        else
                        {
                          if(obj.roleId === 1){
                            navigate("/admin_home");
                          }
                          else if(obj.roleId === 2){
                            navigate("/artist_home");
                          }
                          else if(obj.roleId === 3){
                            navigate("/buyer_home");
                          }
                          
                        }
                      }
    
        })                   
        .catch(error =>alert("server error"));
    }

    return(
        <form>
        <div>
            login :
            <input type="text"  name="uname" onChange={(e) => {dispatch ({type : 'update' ,fld : 'uname' ,val :e.target.value})}}></input>
            pwd :
            <input type="password"  name="pwd" onChange={(e) => {dispatch ({type : 'update' ,fld : 'pwd' ,val :e.target.value})}}></input>
            <input type="submit" value="submit" onClick={(e) => submitHandle(e)}></input>
        </div>
        <div>
            <span>{msg}</span>

            <span>{JSON.stringify(user)}</span>
            <span>{emsg}</span>

        </div>
        </form>
    )
    }