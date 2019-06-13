import * as shell from "shelljs";

const newBackup:string = "Headlinerr_API_"+Date.now();

// Unused as of now
shell.mkdir("backup");
shell.mkdir("backup/"+newBackup);
shell.cp( "-R", "dist/", "backup/"+newBackup );