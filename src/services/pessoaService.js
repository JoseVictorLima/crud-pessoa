import { HttpService } from "./HttpService";

class pessoaService extends HttpService {
    constructor() {
        super("pessoas")
    }
}

export const pessoas = new pessoaService()