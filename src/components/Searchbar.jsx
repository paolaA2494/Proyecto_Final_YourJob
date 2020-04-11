import React, { Component } from 'react'

class Searchbar extends Component {
    render() {
        return (

            <div className="container">
                <h1 className="title is-2 is-bold is-light">Protect Your Identity On The Web.</h1>
                <h3 className="subtitle is-6 is-light">Uncover issues with your name <em>before</em> they become an issue.</h3>
                <div className="form-wrapper">
                    <form accept-charset="UTF-8" action="/search" method="post"><input name="_csrf_token" type="hidden" value="J0o9Wx8iaAAQPx8oRx4JEFouImMqEAAArzYhIH+IUizjsSjemvN3nw=="/>
                    <input name="_utf8" type="hidden" value="✓"/>              
                    <div className="columns inner-form">
                        <div className="column">
                            <div className="control input-column">
                                <input aria-label="Search input box" className="input" id="business-name" name="name" placeholder="Prestige Auto Care" type="text"/>
                                   
                             <div className="popover tip-popover arrow-top">
                                    <span className="tag">Tip</span>
                                    <small>Enter the name as you would normally write it, <b>with spaces</b> and <b>without any domain extensions</b> or company suffixes.</small>
                               </div>

                               </div>
                            </div>
                            <div className="column select-column">
                                <div className="control">
                                    <div id="state-select" className="select-box">
                                        <div className="select-box__current" tabindex="1">
                                            <img className="select-box__icon" src="/images/icons/chevron-56b6235847c27d1fe3375a38b91e9e30.svg?vsn=d" alt="Arrow Icon" aria-hidden="true"/>
                                        </div>
                                        <ul className="select-box__list has-slimscroll"></ul>
                                    </div>
                                </div>
                            </div>
                            <select><option value="bootstrap">Bootstrap</option><option value="bulma">Bulma</option><option value="materialui">Material UI*</option></select>
                            <div className="column button-column">
                                <div className="control">
                                <button aria-label="Search submit button" className="button cta-button primary-button is-raised search-button" id="trigger-search" type="submit">Search</button> 
                                </div>
                               </div>
                             </div>
                            </form>                 
                             </div>
                        </div>
                       
          );
    }
}
 
export default Searchbar;