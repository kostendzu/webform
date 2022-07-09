import React, { useState } from 'react';

const ChangeDef = ({ card, def, setDefault, changeDefault }) => {
    if (def) {
        changeDefault(card);
        setDefault();
    }

}

export default ChangeDef