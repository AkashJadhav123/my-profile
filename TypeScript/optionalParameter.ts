function display(id: number, name: string, role?: string) {
    console.log("ID", id);
    console.log("Name", name);
    if (role != undefined) {
        console.log("Role", role);
    }
    

}

display(1, "JackSparrow");