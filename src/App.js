import { mdx, importMDX } from 'mdx.macro';
import React, { Component } from 'react';

const App = importMDX.sync('./doc.mdx')

export default App;
