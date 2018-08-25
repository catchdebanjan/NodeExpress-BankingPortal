const express = require('express');
const router=express.Router();

const { accounts, writeJSON } = require('../data');

app.get('/transfer', (req, res) => res.render('transfer'));

app.post('/transfer', (req, res) => {
  accounts["savings"].balance = accounts["savings"].balance - req.body.amount;
  accounts["checking"].balance = parseInt(accounts["checking"].balance) + parseInt(req.body.amount,10);
  writeJSON();
  res.render('transfer', {message:'Transfer Completed'});
});

app.get('/payment', (req, res) => {res.render('payment', {account: accounts.credit});
});

app.post('/payment', (req, res) => {
  accounts.credit.balance-=req.body.amount;
  accounts.credit.available+=parseInt(req.body.amount,10);
  writeJSON();
  res.render('payment',{message:'Payment Successful', account:accounts.credit});
});
