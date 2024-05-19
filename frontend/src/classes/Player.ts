class Player {
    private className: string = "";

    get class(): string {
        return this.className;
    }
    set class(className: string) {
        this.className = className;
    }


}
export default Player;