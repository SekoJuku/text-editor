import React from "react"

export const CreateText = () => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="value">Text:</label>
                    <input name="value" minLength="1" placeholder="Text..."/>
                </div>
                <input type="submit" placeholder="Create"/>
            </form>
        </div>
    )
}