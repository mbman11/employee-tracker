INSERT INTO departments (name)
  VALUES 
   ("Web Development"),
   ("Marketing"),
   ("UX/UI")
  ;

INSERT INTO roles (title, salary, department_id)
  VALUES 
    ("Front End Dev", 200000.00, 1),
    ("Web Dev Lead", 400000, 1),
    ("Marketing Entry Level", 70000, 2),
    ("UX Design Lead", 300000, 3)
  ;

  INSERT INTO employees (first_name, last_name, role_id, manager_id)
  VALUES 
    ("Max", "Behrmann", 1, 2),
    ("Kianu", "Reeves", 2, null),
    ("John", "Stamos", 3, 2),
    ("Whoopie", "Goldberg", 4, 2)
    ;


