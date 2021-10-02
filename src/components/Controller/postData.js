import post from './post'

const postData = (toPost, data ) =>{

    qLength = Object.keys(toPost).length
            if(qLength === data){
                post(toPost)
                alert(toPost)
            }
}

export default postData