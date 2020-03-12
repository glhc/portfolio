// Todo project

const projects = [
  {
    title: "Pathfinder",
    description: "An algorithm visualiser that solves generated graphs using " +
    "algorithms like A*, Djikstra's and more.",
    siteUrl: "https://glhc.github.io/pathfinder",
    codeUrl: "https://github.com/glhc/pathfinder",
    image: `${process.env.PUBLIC_URL}/assets/images/pathfinder.png`
  },
  {
    title: "GA_Chat",
    description: "A social media messinging board that was built with React " +
    "and Ruby on Rails.",
    codeUrl: "https://github.com/glhc/ga_chat"
  },
  {
    title: "RecipeDB",
    description: "Suggests recipes based on the ingredients that you have at hand.",
    codeUrl: "https://github.com/glhc/ga_chat"
  },
  {
    title: "To-Do List",
    description: "A stylised, responsive to-do application.",
    siteUrl: "https://glhc.github.io/todo",
    codeUrl: "https://github.com/glhc/todo"
  },
]

export default projects;
