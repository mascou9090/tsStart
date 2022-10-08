import "./App.css";


type TypographyProps = {
  children: React.ReactNode;
  size?: "small" | "large";
}

type ParagraphProps = {
  color: string;
}

const Paragraph = ({ children, size, color }: TypographyProps & ParagraphProps) => { 
  return (
    <h1
    style={{
      fontSize: size == 'small' ? '1.5rem' : '2.3rem',
      color: color
    }}>{children}</h1>);
};


const Title = ({ children, size }: TypographyProps) => { return (
    <h1
    style={{
      fontSize: size == 'small' ? '1.5rem' : '2.3rem'
    }}>{children}</h1>);
};
  
const titleDefaultProps = {
  size: "Large",
}

Title.defaultProps = titleDefaultProps;



const user = {
  id: 1,
  name: "Jhon Doe",
  age: 30,
  isAdmin: true,
  birthDate: new Date("1999-01-01")
}

type UserAttributes = typeof user;

function List<ItemType>({ items, render }: {
  items: ItemType[]; 
  render: (item: ItemType, index: number) => React.ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => {
        return render(item, index);
      })}
    </ul>
  )
}

function App() {

  const items = [
    {
      id:1,
      name: "John Doe",
    },
    {
      id:2,
      name: "Mascou Cachorrão",
    },
    {
      id:3,
      name: "Mero Cagão",
    }
  ]

  return (
    <div className="App">
      <Title>
        <span>
          Hello <b>World</b>
        </span>
      </Title>
      <Paragraph color="red" size="small">
        Eu sou um parágrafo
      </Paragraph>
      <List 
        items={items}
        render={(item, index) => {
          if(item.id === 1) {
            return <p>{item.name}</p>;
          }
          return <h3>{item.name}</h3>;
        }}/>
    </div>
  );
}

export default App;
