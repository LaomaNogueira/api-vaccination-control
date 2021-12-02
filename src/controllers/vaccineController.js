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
            res.status(404).send({ message: `No vaccine found with ID ${id}` });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const updateVaccineRegister = async (req, res) => {
    const { id } = req.params;
    const { name, expected_date, vaccinated } = req.body;
    try {
        const result = await Vaccine.update({ name, expected_date, vaccinated }, {
            where: { id }
        });
        if (result && result > 0) {
            res.status(200).send({ message: `${result[0]} updated vaccine(s)` });
        } else {
            res.status(404).send({ message: `No vaccine found with ID ${id}` });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const isVaccinated = async (req, res) => {
    const { id } = req.params;
    const { vaccinated } = req.body;
    console.log(`doctor${id}favorite${vaccinated}`)
    try {
        const result = await Vaccine.update({ vaccinated }, { where: { id } });

        if (result && result > 0) {
            res.status(200).send({ message: `${result[0]} vaccine(s) status updated` });
        } else {
            res.status(404).send({ message: `No vaccine found with ID ${id}` });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const deleteVaccine = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Vaccine.destroy({ where: { id } });
        if (result) {
            res.status(200).send({ message: `${result} vaccine(s) successfully deleted` });
        } else {
            res.status(404).send({ message: `No vaccine found with ID ${id}` });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports = { 
    registerVaccine,
    getAllVaccines,
    getVaccine,
    updateVaccineRegister,
    isVaccinated,
    deleteVaccine
};