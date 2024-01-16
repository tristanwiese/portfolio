export interface FindTextReturn{
    before: string,
    middle: string,
    after: string
}

export default class StringGen{
    generateRandomString(length: number, search: string){
        let chars: string = 'absdefghijklmnopqrstuvwxyz';

        let string: string = '';

        for (let i = 0; i < length; i++) {
            string += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        if (search != null){
            let index = Math.floor(Math.random() * string.length);
            string = string.substring(0, index) + search + string.substring(index, string.length);
        }

        return string;
    }

    searchString(haystack: string, needle: string): number{
        let needleLen:number = needle.length;
        let haystackLen: number = haystack.length;

        for (let i = needleLen - 1; i < haystackLen; i++) {
            let subStr: string = haystack.substring(i, i + needleLen);

            console.log(subStr);

            if (subStr === needle){
                return i;
            }
        }
        return -1;
    }

    findText(haystack: string, needle: string): FindTextReturn{
        let index = this.searchString(haystack, needle);

        if (index > 0){
            return {
                before: haystack.substring(0, index),
                middle: haystack.substring(index, index + needle.length),
                after: haystack.substring(index + needle.length, haystack.length)
            }
        }
        return {
            before: '',
            middle: '',
            after: ''
        }
    }
}