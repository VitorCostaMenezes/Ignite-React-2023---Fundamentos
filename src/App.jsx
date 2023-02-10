import {Post} from './Post'; // importação de componentes com nomes definidos

export function App() {

  return (
    <div>
      <Post 
        author="Vitor Costa"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere corporis, distinctio velit, laborum quidem cupiditate perferendis, praesentium in saepe exercitationem sit voluptas. Dolore aliquam totam assumenda sunt porro nihil. Quo!"
      />

      <Post 
        author="Vitor Menezes"
        content="Um novo post de teste"
      
      />
      
    </div>
  )
}

// export default App
//utilizado para exportações default
