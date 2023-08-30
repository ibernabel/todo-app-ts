// import { Copyright } from './components/Copyright'
import { TodosLoading } from './components/TodosLoading'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Todos } from './components/Todos'
import { useTodos } from './hooks/useTodos'

const App: React.FC = () => {
  const {
    activeCount,
    completedCount,
    filterSelected,
    // isLoading,
    handleClearCompleted,
    handleCompleted,
    handleFilterChange,
    handleRemove,
    handleSave,
    handleUpdateTitle,
    todos: filteredTodos
  } = useTodos()

  return (
    <>
      <div className='todoapp'>
        <Header saveTodo={handleSave} />
        {true && (
        // <>
            <TodosLoading />
        // </>
        )}
        <Todos
          removeTodo={handleRemove}
          setCompleted={handleCompleted}
          setTitle={handleUpdateTitle}
          todos={filteredTodos}
        />
        <Footer
          handleFilterChange={handleFilterChange}
          completedCount={completedCount}
          activeCount={activeCount}
          filterSelected={filterSelected}
          onClearCompleted={handleClearCompleted}
        />
      </div>
      {/* <Copyright /> */}
    </>
  )
}

export default App
