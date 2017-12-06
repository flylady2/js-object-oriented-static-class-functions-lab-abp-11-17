class Question {
  constructor(content){
    this.content = content;
    this.save()
  }
  save(){
    this.constructor._All.push(this)
  }
  static All() {
    return this._All;
  }
  static Find(ID) {
    return this.All().filter(function(question){
      return question.ID === content;
    })
  }
}
Question._All = [];
