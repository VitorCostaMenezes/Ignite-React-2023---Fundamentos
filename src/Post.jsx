export function Post(props) {

    return(
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </div>
    ) 
}

// export default Post




// nas esportações  como o modelo abaixo, é ppossivel renomear o nome do componente no momento da importação


// function Post() {
//     return <p>Post</p>
// }

// export default Post