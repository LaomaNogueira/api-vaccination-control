const Vaccine = require('../models/Vaccines');

const registerVaccine = async (req, res) => {
    const { name, expected_date, vaccinated } = req.body;
    try {
        const vaccine = await Vaccine.create({ name, expected_date, vaccinated });
        console.log(`${vaccine.name} vaccine registered`);
        res.status(201).send(vaccine);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const getAllVaccines = async (req, res) => {
    const { vaccinated } = req.query;
    try {
        const filter = vaccinated ? { where: { vaccinated } } : {}
        const vaccines = await Vaccine.findAll(filter);
        if (vaccines && vaccines.length > 0) {
            res.status(200).send(vaccines);
        } else {
            res.status(204).send();
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const getVaccine = async (req, res) => {
    const { id } = req.params;
    try {
        const vaccine = await Vaccine.findOne({
            where: { id }
        });
        if (vaccine) {
            res.status(200).send(vaccine);
        } else {
            res.status(404).send({ message: `No vaccine found with id ${id}` });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};


module.exports = { 
    registerVaccine,
    getAllVaccines,
    getVaccine,
    //updateVaccineRegister,
    //isVaccinated,
    //deleteVaccine
};