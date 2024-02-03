const express = require('express');
const { crud, fn } = require('./functions');

const router = express.Router();

router.get('/:table', async (req, res) => {
    const table = req.params.table;
    try {
        let data = await crud.findAll(table);
        res.setHeader("Content-Type", "application/json");
        res.json(data);
    } catch (error) {
        res.send("You may entered the text wrongly!");
    }
});
router.get('/:table/:id', async (req, res) => {
    const table = req.params.table;
    const id = req.params.id;
    try {
        let data = await crud.findByID(table, id);
        res.setHeader("Content-Type", "application/json");
        res.json(data);
    } catch (error) {
        res.send("You may entered the text wrongly!");
    }
});


router.post('/:table', async (req, res) => {
    const table = req.params.table;
    try {
        let data;
        
        let keys = Object.keys(req.query);
        let values = Object.values(req.query);

        if (fn.checkValidity(table, keys)) data = await crud.insertNew(table, values);
    
        res.send(data);
    } catch (error) {
        res.send(''+error);
    }
    
});

router.put('/:table/:id', async (req, res) => {
    const table = req.params.table;
    const id = req.params.id;
    try {
        let data;
        
        let keys = Object.keys(req.query);
        let values = Object.values(req.query);
        
        if (fn.checkValidity(table, keys)) data = crud.updateByID(table, id, null, values);
        
        res.send(req.query);
    } catch (error) {
        res.send("You may entered the text wrongly!");
    }
});

router.put('/:table/:id/:idsecond', async (req, res) => {
    const table = req.params.table;
    const id = req.params.id;
    const idsecond = req.params.idsecond;
    try {
        let data;
        
        let keys = Object.keys(req.query);
        let values = Object.values(req.query);
        
        if (fn.checkValidity(table, keys)) data = await crud.updateByID(table, id, idsecond, values);
        if (data && data.startsWith("Error: ")) res.send(data);
        else res.send(req.query);
        
        // res.send(req.query);
    } catch (error) {
        res.send("You may entered the text wrongly!");
    }
});

router.delete("/:table/:id", async (req, res) => {
    const table = req.params.table;
    const id = req.params.id;

    let data = await crud.deleteByID(table, id);
    if (data && data.startsWith("Error: ")) res.send(data);
    else res.send(req.params);
});

// delete for relations by the two ids of the relation
router.delete("/:table/:id/:idsecond", async (req, res) => {
    const table = req.params.table;
    const id = req.params.id;
    const idsecond = req.params.idsecond;

    let data = await crud.deleteRelationByIDs(table, id, idsecond);
    if (data && data.startsWith("Error: ")) res.send(data);
    else res.send(req.params);
});

module.exports = router;