import {useReducer, useState} from "react";
import { useParams } from "react-router-dom";
import { css } from '@emotion/react'
const INIT_USERS = [];

const actionTypes = {
    ADD : "add",
    DELETE : "delete",
    MODIFY : "modify"
}
const hanldeReducer = (users, action) => {
    console.log(users,action,users.DELETE)
    switch (action.type) {
        case actionTypes.ADD:{
            const newUser = {
                id:Date.now(),
                name : action.payload.name,
                active:false
            };
            return [...users,newUser]
        }
        case actionTypes.DELETE:{
            const data = users.filter(item => item.id !== action.payload.id)
            return [...data]
        }
        case actionTypes.MODIFY:{
            return users.map((user) => {
                if(user.id === action.payload.id)
                    return {...user,active: !user.active};
                return user
            })
        }
        

        default:
            break;
    }
}

const DetailProduct = () => {
    const {id} = useParams();

    const [users, dispatch] = useReducer(hanldeReducer, INIT_USERS);
    const [name,setName] = useState(" ");

    const handleInput = (e) =>{
        setName(e.target.value)
    }
    const handleAdd = () => {
        dispatch({type:actionTypes.ADD, payload:{name}} )
    }
    const onModify = (id) => {
        dispatch({type:actionTypes.MODIFY, payload:{id}} )
    } 
    const onDelete = (id) => {
        dispatch({type:actionTypes.DELETE, payload:{id}} )
    }
    const color = 'white'
    return(
        <div className="detail-page container">
            <div className="main">
                <h1>Detail Blog</h1>
            </div>
            <div style={{margin:'50px 0'}}>
                <input type="text" 
                    onChange={handleInput} 
                    placeholder="Enter Name" 
                    css={css`
                        background-color: hotpink;
                        &:hover {
                            color:red;
                        }
                        `}
                  
                />
                <button onClick={handleAdd} 
               css={css`
               padding: 32px;
               background-color: hotpink;
               font-size: 24px;
               border-radius: 4px;
               &:hover {
                 color: ${color};
               }
             `}
                    
                >
                     Add
                </button>
            </div>
            <ul>
                {users.map(item => {
                    return(
                        <li key={item.id}>
                            <span style={item.active ? {color:'green'} : {color: "red"}}>
                                {item.name}
                            </span>
                            <button onClick={() => onModify(item.id)}
                             style={{
                                background:"#eee",
                                height:'45px',
                                width:'100px'
                            }} >
                                {item.active ? "deActive" : "active"}
                            </button>
                            <button onClick={() => onDelete(item.id)}
                                style={{
                                    background:"#eee",
                                    height:'45px',
                                    width:'100px',
                                    marginLeft:'15px'
                                }}
                                >
                                Delete
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default DetailProduct