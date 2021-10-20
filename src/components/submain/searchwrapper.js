import search from '../../images/core-img/search.png'
function Searchwrapper() {
    return <div class="search-wrapper section-padding-100">
        <div class="search-close">
            <i class="fa fa-close" aria-hidden="true"></i>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="search-content">
                        <form action="#" method="get">
                            <input type="search" name="search" id="search" placeholder="Type your keyword..."/>
                            <button type="submit"><img src={search} alt=""/></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
}  
export default Searchwrapper;