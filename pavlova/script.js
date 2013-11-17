function avtorization() {
	var login,
		logins = ["manager", "developer", "user"],
		password,
		passwords = ['1', '12', '123'],
		count = 0;
		
	login = prompt("login:");
	
	if (logins.indexOf(login) != -1) {
		while (password != passwords[logins.indexOf(login)] && ++count <= 5)
			password = prompt("password:");
			
		if (password == passwords[logins.indexOf(login)])
			switch (login)
			{
				case "manager":
					alert("big secret");
					break;
				case "developer":
					alert("medium secret");
					break;
				case "user":
					alert("small secret");
					break;
			}
		else
			alert("!ERROR: password incorrect");
	} else
		alert("!ERROR: login incorrect");
};

avtorization();