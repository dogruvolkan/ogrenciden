

export function getDate(dateTimeString: string) {
    return dateTimeString?.split('T')[0];
}

export function getDateWithTime(dateTimeString: string) {
    const time = new Date(dateTimeString);
    const hour = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const timeStr = time.toLocaleDateString();
    return `${timeStr} ${hour}`;
}


export function checkPassword(password:string , confirmedPassword:string):boolean{
    return password === confirmedPassword;
}