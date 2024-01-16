interface JSONResponse{
    [key: string]: any
 }


class GitHubProjectModel{

    url:string;
    private:boolean;
    name:string

    constructor(json: JSONResponse){
        this.url = json['html_url'];
        this.private = json['private'];
        this.name = json['full_name'];
    }

    debugLog() {
        console.log("URL: " + this.url);
        console.log("Private: " + this.private)
        console.log("Name: " + this.name)
    }
}