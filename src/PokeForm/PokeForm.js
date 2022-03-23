




function PokeForm( props ){
    return(
        <form onSubmit={ e => props.buscarPokemones( e )}>
            <button type="submit">
                Fetch Pokemon
            </button>
        </form>
    );
}

export default PokeForm;