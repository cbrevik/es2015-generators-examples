public class Todos {
    public IEnumerable<string> GetTodos()
    {
        yield return "Buy beer";
        yield return "Write code";
        Console.WriteLine("Interrupt!");
        yield return "Sleep";
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
