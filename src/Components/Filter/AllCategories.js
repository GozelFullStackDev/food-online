import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div>
            <h1>What kind of food do you like?</h1>
            {['SEAFOOD', 'ITALIAN', 'SALADS', 'APPETIZER', 'ALL']
            .map(category => <Filter category={category}/> 
            )}
         
        </div> )
}

export default AllCategories;