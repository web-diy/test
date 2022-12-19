function Article() {
    this.created = new Date();
    Article.last = this.created;
    Article.count++;
};
Article.count = 0;

Article.showStats = function() {
    console.log(this.last.toDateString());
    console.log(this.count);
}

new Article();
new Article();

Article.showStats();
