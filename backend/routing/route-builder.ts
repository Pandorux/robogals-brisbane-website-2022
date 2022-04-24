import { CRUDConstants } from "./crud-constants.ts";
export class RouteBuilder {
    private route: string;
    private _isFullyQualified: boolean = false;

    public get isFullyQualified(): boolean {
        return this._isFullyQualified;
    }

    private set isFullyQualified(fullyQualify: boolean) {
        this._isFullyQualified = fullyQualify;
    }

    constructor(route: string, isFullyQualified: boolean = false) {
        this.route = route;
        this.isFullyQualified = isFullyQualified;
    }

    public Prepend(str: string = ''): RouteBuilder {
        return new RouteBuilder(`${str}/${this.route}`, this.isFullyQualified);
    }

    public Append(str: string): RouteBuilder {
        return new RouteBuilder(`${this.route}/${str}`, this.isFullyQualified);
    }

    public AppendId(): RouteBuilder {
        return new RouteBuilder(`${this.route}/:id`, this.isFullyQualified);
    }

    public AppendCreate(): RouteBuilder {
        return new RouteBuilder(`${this.route}/${CRUDConstants.create}`, this.isFullyQualified);
    }

    public AppendRead(): RouteBuilder {
        return new RouteBuilder(`${this.route}/${CRUDConstants.read}`, this.isFullyQualified);
    }

    public AppendUpdate(): RouteBuilder {
        return new RouteBuilder(`${this.route}/${CRUDConstants.update}`, this.isFullyQualified);
    }

    public AppendDelete(): RouteBuilder {
        return new RouteBuilder(`${this.route}/${CRUDConstants.delete}`, this.isFullyQualified);
    }

    public ToString(): string {
        return this.route;
    }

    public FullyQualify(): RouteBuilder {

        if (!this.isFullyQualified) {
            this.isFullyQualified = true;
            this.route = process.env.ATLAS_ENDPOINT + this.route;
        }
        
        return new RouteBuilder(this.route, this.isFullyQualified);
    }
}

module.exports = { RouteBuilder };