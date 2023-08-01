import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ExpanseList from './components/ExpanseList'
import ExpenseFilter from './components/ExpenseFilter'
import Form from './components/Form';
import categories from './components/categories';





function App() {

  const [selectedCategory, setSelectedCategory] =  useState('');

  const [expenses , setExpenses] = useState(
    [
      {id : 1, description : 'aaa', amount : 10, category : 'utilities'},
      {id : 2, description : 'adf', amount : 10, category : 'utilities'},
      {id : 3, description : 'adsfd', amount : 10, category : 'utilities'},
      {id : 4, description : 'add', amount : 10, category : 'utilities'},
      {id : 5, description : 'aad', amount : 10, category : 'utilities'}
    ]
  )

  
  const visibleExpenses = selectedCategory ? expenses.filter((e) =>
     e.category === selectedCategory || selectedCategory === 'All categories')
      : expenses;
  
  
  

  return (

    <div>
      <div className="mb-5">
        <Form onSubmit={expense => setExpenses([...expenses , {...expense, id : expenses.length +1}])
        }></Form>
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectedCategory={(category)=> setSelectedCategory(category)}></ExpenseFilter>
      </div>
      <ExpanseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}></ExpanseList>
    </div>
  )
}

export default App
