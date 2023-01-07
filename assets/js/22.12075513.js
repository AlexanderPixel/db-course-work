(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{646:function(e,n,_){"use strict";_.r(n);var r=_(34),v=Object(r.a)({},(function(){var e=this,n=e.$createElement,_=e._self._c||n;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"реалізація-інформаціиного-та-програмного-забезпечення"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#реалізація-інформаціиного-та-програмного-забезпечення"}},[e._v("#")]),e._v(" Реалізація інформаційного та програмного забезпечення")]),e._v(" "),_("p",[e._v("В рамках проекту розробляється:")]),e._v(" "),_("ul",[_("li",[e._v("SQL-скрипт для створення на початкового наповнення бази даних")]),e._v(" "),_("li",[e._v("RESTfull сервіс для управління даними")])]),e._v(" "),_("h1",{attrs:{id:"реалізація-інформаціиного-та-програмного-забезпечення-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#реалізація-інформаціиного-та-програмного-забезпечення-2"}},[e._v("#")]),e._v(" Реалізація інформаційного та програмного забезпечення")]),e._v(" "),_("p",[e._v("В рамках проекту розробляється:")]),e._v(" "),_("ul",[_("li",[e._v("SQL-скрипт для створення на початкового наповнення бази даних")]),e._v(" "),_("li",[e._v("RESTfull сервіс для управління даними")])]),e._v(" "),_("p",[e._v("-- MySQL Script generated by MySQL Workbench\n-- Sun Dec 25 07:19:21 2022\n-- Model: New Model    Version: 1.0\n-- MySQL Workbench Forward Engineering")]),e._v(" "),_("p",[e._v("SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;\nSET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;\nSET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';")]),e._v(" "),_("hr"),e._v(" "),_("p",[e._v("-- Schema mydb")]),e._v(" "),_("hr"),e._v(" "),_("p",[e._v("DROP SCHEMA IF EXISTS "),_("code",[e._v("mydb")]),e._v(" ;")]),e._v(" "),_("hr"),e._v(" "),_("p",[e._v("-- Schema mydb")]),e._v(" "),_("hr"),e._v(" "),_("p",[e._v("CREATE SCHEMA IF NOT EXISTS "),_("code",[e._v("mydb")]),e._v(" DEFAULT CHARACTER SET utf8 ;\nUSE "),_("code",[e._v("mydb")]),e._v(" ;")]),e._v(" "),_("hr"),e._v(" "),_("p",[e._v("-- Table "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("answer")])]),e._v(" "),_("hr"),e._v(" "),_("p",[e._v("DROP TABLE IF EXISTS "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("answer")]),e._v(" ;")]),e._v(" "),_("p",[e._v("CREATE TABLE IF NOT EXISTS "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("answer")]),e._v(" (\n"),_("code",[e._v("user_id")]),e._v(" INT NOT NULL,\n"),_("code",[e._v("text")]),e._v(" TEXT NOT NULL,\n"),_("code",[e._v("data")]),e._v(" DATE NOT NULL,\n"),_("code",[e._v("id")]),e._v(" INT NOT NULL AUTO_INCREMENT,\n"),_("code",[e._v("answer_id")]),e._v(" INT NOT NULL,\nPRIMARY KEY ("),_("code",[e._v("id")]),e._v("),\nINDEX "),_("code",[e._v("fk_selectedOption_id_idx")]),e._v(" ("),_("code",[e._v("answer_id")]),e._v(" ASC) VISIBLE,\nINDEX "),_("code",[e._v("fk_user_id_idx")]),e._v(" ("),_("code",[e._v("user_id")]),e._v(" ASC) VISIBLE,\nCONSTRAINT "),_("code",[e._v("fk_selectedOption_id")]),e._v("\nFOREIGN KEY ("),_("code",[e._v("answer_id")]),e._v(")\nREFERENCES "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("selectedOption")]),e._v(" ("),_("code",[e._v("id")]),e._v(")\nON DELETE NO ACTION\nON UPDATE NO ACTION,\nCONSTRAINT "),_("code",[e._v("fk_user_id")]),e._v("\nFOREIGN KEY ("),_("code",[e._v("user_id")]),e._v(")\nREFERENCES "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("user")]),e._v(" ("),_("code",[e._v("id")]),e._v(")\nON DELETE NO ACTION\nON UPDATE NO ACTION);")]),e._v(" "),_("hr"),e._v(" "),_("p",[e._v("-- Table "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("category")])]),e._v(" "),_("hr"),e._v(" "),_("p",[e._v("DROP TABLE IF EXISTS "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("category")]),e._v(" ;")]),e._v(" "),_("p",[e._v("CREATE TABLE IF NOT EXISTS "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("category")]),e._v(" (\n"),_("code",[e._v("category_id")]),e._v(" INT NOT NULL,\n"),_("code",[e._v("name")]),e._v(" VARCHAR(255) NOT NULL,\nPRIMARY KEY ("),_("code",[e._v("category_id")]),e._v("));")]),e._v(" "),_("hr"),e._v(" "),_("p",[e._v("-- Table "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("option")])]),e._v(" "),_("hr"),e._v(" "),_("p",[e._v("DROP TABLE IF EXISTS "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("option")]),e._v(" ;")]),e._v(" "),_("p",[e._v("CREATE TABLE IF NOT EXISTS "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("option")]),e._v(" (\n"),_("code",[e._v("type")]),e._v(" TEXT(255) NOT NULL,\n"),_("code",[e._v("text")]),e._v(" TEXT(255) NOT NULL,\n"),_("code",[e._v("id")]),e._v(" INT NOT NULL AUTO_INCREMENT,\n"),_("code",[e._v("question_id")]),e._v(" INT NOT NULL,\nPRIMARY KEY ("),_("code",[e._v("id")]),e._v("),\nINDEX "),_("code",[e._v("fk_question_id_idx")]),e._v(" ("),_("code",[e._v("question_id")]),e._v(" ASC) VISIBLE,\nCONSTRAINT "),_("code",[e._v("fk_question_id")]),e._v("\nFOREIGN KEY ("),_("code",[e._v("question_id")]),e._v(")\nREFERENCES "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("question")]),e._v(" ("),_("code",[e._v("id")]),e._v(")\nON DELETE NO ACTION\nON UPDATE NO ACTION);")]),e._v(" "),_("hr"),e._v(" "),_("p",[e._v("-- Table "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("question")])]),e._v(" "),_("hr"),e._v(" "),_("p",[e._v("DROP TABLE IF EXISTS "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("question")]),e._v(" ;")]),e._v(" "),_("p",[e._v("CREATE TABLE IF NOT EXISTS "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("question")]),e._v(" (\n"),_("code",[e._v("type")]),e._v(" TEXT(255) NOT NULL,\n"),_("code",[e._v("text")]),e._v(" TEXT(255) NOT NULL,\n"),_("code",[e._v("id")]),e._v(" INT NOT NULL AUTO_INCREMENT,\n"),_("code",[e._v("topic")]),e._v(" TEXT(255) NOT NULL,\n"),_("code",[e._v("quiz_id")]),e._v(" INT NOT NULL,\nPRIMARY KEY ("),_("code",[e._v("id")]),e._v("),\nINDEX "),_("code",[e._v("fk_quiz_id_idx")]),e._v(" ("),_("code",[e._v("quiz_id")]),e._v(" ASC) VISIBLE,\nCONSTRAINT "),_("code",[e._v("fk_quiz_id")]),e._v("\nFOREIGN KEY ("),_("code",[e._v("quiz_id")]),e._v(")\nREFERENCES "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("quiz")]),e._v(" ("),_("code",[e._v("id")]),e._v(")\nON DELETE NO ACTION\nON UPDATE NO ACTION);")]),e._v(" "),_("hr"),e._v(" "),_("p",[e._v("-- Table "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("quiz")])]),e._v(" "),_("hr"),e._v(" "),_("p",[e._v("DROP TABLE IF EXISTS "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("quiz")]),e._v(" ;")]),e._v(" "),_("p",[e._v("CREATE TABLE IF NOT EXISTS "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("quiz")]),e._v(" (\n"),_("code",[e._v("type")]),e._v(" TEXT(255) NOT NULL,\n"),_("code",[e._v("text")]),e._v(" TEXT(255) NOT NULL,\n"),_("code",[e._v("id")]),e._v(" INT NOT NULL AUTO_INCREMENT,\n"),_("code",[e._v("topic")]),e._v(" TEXT(255) NOT NULL,\n"),_("code",[e._v("date")]),e._v(" DATETIME NOT NULL,\n"),_("code",[e._v("creator_id")]),e._v(" INT NOT NULL,\nPRIMARY KEY ("),_("code",[e._v("id")]),e._v("),\nINDEX "),_("code",[e._v("fk_creator_id_idx")]),e._v(" ("),_("code",[e._v("creator_id")]),e._v(" ASC) VISIBLE,\nCONSTRAINT "),_("code",[e._v("fk_creator_id")]),e._v("\nFOREIGN KEY ("),_("code",[e._v("creator_id")]),e._v(")\nREFERENCES "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("user")]),e._v(" ("),_("code",[e._v("id")]),e._v(")\nON DELETE NO ACTION\nON UPDATE NO ACTION);")]),e._v(" "),_("hr"),e._v(" "),_("p",[e._v("-- Table "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("selectedOption")])]),e._v(" "),_("hr"),e._v(" "),_("p",[e._v("DROP TABLE IF EXISTS "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("selectedOption")]),e._v(" ;")]),e._v(" "),_("p",[e._v("CREATE TABLE IF NOT EXISTS "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("selectedOption")]),e._v(" (\n"),_("code",[e._v("id")]),e._v(" INT NOT NULL AUTO_INCREMENT,\n"),_("code",[e._v("option_id")]),e._v(" INT NOT NULL,\nPRIMARY KEY ("),_("code",[e._v("id")]),e._v("),\nINDEX "),_("code",[e._v("fk_option_id_idx")]),e._v(" ("),_("code",[e._v("option_id")]),e._v(" ASC) VISIBLE,\nCONSTRAINT "),_("code",[e._v("fk_option_id")]),e._v("\nFOREIGN KEY ("),_("code",[e._v("option_id")]),e._v(")\nREFERENCES "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("option")]),e._v(" ("),_("code",[e._v("id")]),e._v(")\nON DELETE NO ACTION\nON UPDATE NO ACTION);")]),e._v(" "),_("hr"),e._v(" "),_("p",[e._v("-- Table "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("user")])]),e._v(" "),_("hr"),e._v(" "),_("p",[e._v("DROP TABLE IF EXISTS "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("user")]),e._v(" ;")]),e._v(" "),_("p",[e._v("CREATE TABLE IF NOT EXISTS "),_("code",[e._v("mydb")]),e._v("."),_("code",[e._v("user")]),e._v(" (\n"),_("code",[e._v("username")]),e._v(" VARCHAR(16) NOT NULL,\n"),_("code",[e._v("mail")]),e._v(" VARCHAR(255) NOT NULL,\n"),_("code",[e._v("id")]),e._v(" INT NOT NULL AUTO_INCREMENT,\nPRIMARY KEY ("),_("code",[e._v("id")]),e._v("));")]),e._v(" "),_("p",[e._v("SET SQL_MODE=@OLD_SQL_MODE;\nSET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;\nSET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;")]),e._v(" "),_("h1",{attrs:{id:"реалізація-доступу-до-бази-даних"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#реалізація-доступу-до-бази-даних"}},[e._v("#")]),e._v(" Реалізація доступу до бази даних")]),e._v(" "),_("h1",{attrs:{id:"фаил-applicationdbcontext-cs"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#фаил-applicationdbcontext-cs"}},[e._v("#")]),e._v(" Файл ApplicationDbContext.cs")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("using Microsoft.EntityFrameworkCore;\nusing WebAPI.Models;\n\nnamespace WebAPI;\n\npublic class ApplicationDbContext : DbContext\n{\n    public DbSet<User> Users { get; set; }\n\n    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> dbContext) : base(dbContext)\n    {\n    }\n}\n")])])]),_("h1",{attrs:{id:"фаил-userrepository-cs"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#фаил-userrepository-cs"}},[e._v("#")]),e._v(" Файл UserRepository.cs")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("using Microsoft.EntityFrameworkCore;\nusing WebAPI.Interfaces;\nusing WebAPI.Models;\n\nnamespace WebAPI.Repositories;\n\npublic class UserRepository : IUserRepository\n{\n    private readonly ApplicationDbContext _dbContext;\n\n    public UserRepository(ApplicationDbContext dbContext)\n    {\n        _dbContext = dbContext;\n    }\n\n    public IQueryable<User> GetAllUsers()\n    {\n        return _dbContext.Users;\n    }\n\n    public User GetUserById(int id)\n    {\n        return _dbContext.Users.FirstOrDefault(user => user.Id == id);\n    }\n\n    public void AddUser(User user)\n    {\n        _dbContext.Users.Add(user);\n    }\n\n    public void UpdateUser(User user)\n    {\n        _dbContext.Users.Update(user);\n    }\n\n    public void DeleteUser(User user)\n    {\n        _dbContext.Users.Remove(user);\n    }\n\n    public int SaveChanges()\n    {\n        return _dbContext.SaveChanges();\n    }\n}\n")])])]),_("h1",{attrs:{id:"фаил-userservice-cs"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#фаил-userservice-cs"}},[e._v("#")]),e._v(" Файл UserService.cs")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("using WebAPI.Interfaces;\nusing WebAPI.Models;\n\nnamespace WebAPI.Services;\n\npublic class UserService : IUserService\n{\n    private readonly IUserRepository _userRepository;\n\n    public UserService(IUserRepository userRepository)\n    {\n        _userRepository = userRepository;\n    }\n\n    public IQueryable<User> GetAllUsers()\n    {\n        return _userRepository.GetAllUsers();\n    }\n\n    public User GetUserById(int id)\n    {\n        return _userRepository.GetUserById(id);\n    }\n\n    public void AddUser(User user)\n    {\n        _userRepository.AddUser(user);\n    }\n\n    public void UpdateUser(User user)\n    {\n        _userRepository.UpdateUser(user);\n    }\n\n    public void DeleteUser(User user)\n    {\n        _userRepository.DeleteUser(user);\n    }\n\n    public int SaveChanges()\n    {\n        return _userRepository.SaveChanges();\n    }\n}\n")])])]),_("h1",{attrs:{id:"фаил-usercontroller-cs"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#фаил-usercontroller-cs"}},[e._v("#")]),e._v(" Файл UserController.cs")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v('using Microsoft.AspNetCore.Mvc;\nusing WebAPI.Interfaces;\nusing WebAPI.Models;\n\nnamespace WebAPI.Controllers;\n\n[ApiController]\n[Route("api/[controller]")]\npublic class UserController : ControllerBase\n{\n    private readonly IUserService _userService;\n\n    public UserController(IUserService userService)\n    {\n        _userService = userService;\n    }\n\n    [HttpGet]\n    [Route("[action]")]\n    public ActionResult<IEnumerable<User>> GetAll()\n    {\n        IEnumerable<User> users = _userService.GetAllUsers();\n        if (users is null) return NotFound("Users not found");\n        return Ok(users);\n    }\n\n    [HttpGet("{id}")]\n    public ActionResult<User> Get(int id)\n    {\n        User user = _userService.GetUserById(id);\n        if (user is null) return NotFound("User not found.");\n        return Ok(user);\n    }\n\n    [HttpDelete]\n    public ActionResult Delete(User user)\n    {\n        try\n        {\n            _userService.DeleteUser(user);\n            _userService.SaveChanges();\n        }\n        catch (Exception)\n        {\n            return BadRequest("Bad request.");\n        }\n        \n        return Ok("User was deleted.");\n    }\n\n    [HttpPost]\n    public ActionResult Post(User user)\n    {\n        try\n        {\n            _userService.AddUser(user);\n            _userService.SaveChanges();\n        }\n        catch (Exception)\n        {\n            return BadRequest("Bad request.");\n        }\n\n        return Ok("User was added.");\n    }\n    \n    [HttpPut]\n    public ActionResult Put(User user)\n    {\n        try\n        {\n            _userService.UpdateUser(user);\n            _userService.SaveChanges();\n        }\n        catch (Exception)\n        {\n            return BadRequest("Bad request.");\n        }\n\n        return Ok("User was updated.");\n    }\n}\n')])])]),_("h1",{attrs:{id:"фаил-program-cs"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#фаил-program-cs"}},[e._v("#")]),e._v(" Файл Program.cs")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v('using Microsoft.EntityFrameworkCore;\nusing WebAPI;\nusing WebAPI.Interfaces;\nusing WebAPI.Repositories;\nusing WebAPI.Services;\n\nvar builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddControllers();\n\nbuilder.Services.AddDbContext<ApplicationDbContext>(options =>\n{\n    string connectionString = builder.Configuration.GetConnectionString("DatabaseCS");\n    MySqlServerVersion serverVersion = new MySqlServerVersion(new Version(5, 7, 32));\n    options.UseMySql(connectionString, serverVersion);\n});\n\nbuilder.Services.AddScoped<IUserRepository, UserRepository>();\nbuilder.Services.AddScoped<IUserService, UserService>();\n\nbuilder.Services.AddSwaggerGen();\n\nvar app = builder.Build();\n\nif (app.Environment.IsDevelopment())\n{\n    app.UseDeveloperExceptionPage();\n\n    app.UseSwagger();\n    app.UseSwaggerUI();\n}\n\napp.UseStatusCodePages();\napp.MapDefaultControllerRoute();\n\napp.Run();\n')])])])])}),[],!1,null,null,null);n.default=v.exports}}]);