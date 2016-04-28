public class Todos {
    public IEnumerable<string> GetTodos()
    {
        yield return "Buy beer";
        yield return "Write code";
        foreach (var todo in MoreTodos())
            yield return todo;
        yield return "Sleep";
    }

    public IEnumerable<string> MoreTodos()
    {
        yield return "Make dinner";
        Console.WriteLine("Interrupt!");
        yield return "Workout";
    }


    public void PrintTodos()
    {
        var todos = GetTodos();
        foreach (var todo in todos)
        {
            Console.WriteLine("Remember to: " + todo);
        }
    }
}

var todos = new Todos();
todos.PrintTodos();
