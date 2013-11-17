function avtorization() {
	var login,
		logins = ['manager', 'developer', 'user'],
		password,
		passwords = ['1', '12', '123'],
		index = 0,
		count = 0,
		messages = ['big secret', 'medium secret', 'small secret'];
		
	login = prompt("login:");
	index = logins.indexOf(login);
	if ( index != -1) {
		while (password != passwords[index] && ++count <= 5)
			password = prompt("password:");
			
		if (password == passwords[index])
			switch (login)
			{
				case "manager":
				case "developer":
				case "user":
					alert(messages[index]);
					break;
				default:
					alert("You are outsider!");
			}
		else
			alert("!ERROR: password incorrect");
	} else
		alert("!ERROR: login incorrect");
};

avtorization();