class PhotoEditor{
  constructor(id){
    this.photoEditor = $(id);
    this.btn         = this.photoEditor.find(".btn");
    this.photoUrl    = this.photoEditor.find(".url-box");
    this.photo       = this.photoEditor.find("#imageContainer img");
    this.filterType  = this.photoEditor.find(".css-filter-type");
    this.filters     = {};

    this.createEvents();
  }
  changePhoto(){
    // http://nolabelme.org/wp-content/uploads/2018/05/summer-01.jpg
    this.photo.attr("src", this.photoUrl.val());
  }
  decoratePhoto(event){
    let currentRange   = $(event.currentTarget)
        ,currentFilter = currentRange.data("filter")
        ,currentUnit   = currentRange.data("unit")
        ,filterList    = ""
        ;
    this.filters[currentFilter] = {
      "value" : currentRange.val()
      ,"unit" : currentUnit
    };
    // console.log(this.filters);
    $.each(this.filters, (filter, filterData)=>{
      filterList += `${filter}(${filterData.value}${filterData.unit}) `;
    });
    this.photo.css("filter", filterList);
  }
  createEvents(){
    this.btn.click(this.changePhoto.bind(this));
    this.filterType.change(this.decoratePhoto.bind(this)).mousemove(this.decoratePhoto.bind(this));
  }
}
let pe = new PhotoEditor("#editor");