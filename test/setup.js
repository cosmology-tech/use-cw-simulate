const chai = require('chai');
const sinon = require('sinon');
const { createMemoryHistory } = require('history');

global.history = createMemoryHistory();

// shortcuts:
global.expect = chai.expect;
global.should = chai.should();
global.sinon = sinon;
