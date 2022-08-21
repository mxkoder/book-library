const { Reader } = require('../models');

exports.create = async (req, res) => {
    const newReader = await Reader.create(req.body);
    res.status(201).json(newReader);
};

exports.read = async (_, res) => {
    const readers = await Reader.findAll();
    res.status(200).json(readers);
};

exports.readByReaderId = async (req, res) => {
    const readerId = req.params.id;
    const reader = await Reader.findByPk(readerId);

    if(!reader) {
        res.status(404).send({ error: 'The reader could not be found.' })
    } else {
        res.status(200).json(reader);
    }
};

// exports.readById = async (req, res) => {
//     const db = await getDb();
//     const { artistId } = req.params;

//     const [[selectedArtist]] = await db.query(
//         'SELECT * FROM Artist WHERE id = ?', [ artistId, ]
//         );

//     if(!selectedArtist) {
//         res.sendStatus(404);
//     } else {
//         res.status(200).json(selectedArtist);
//     }

//     db.end();
// };

// exports.updateArtist = async (req, res) => {
//     const db = await getDb();
//     const data = req.body;
//     const { artistId } = req.params;

//     try {

//         const [
//             { affectedRows },
//         ] = await db.query('UPDATE Artist SET ? WHERE id = ?', [data, artistId]);

//         if (!affectedRows) {
//         res.sendStatus(404);
//         } else {
//         res.sendStatus(200);
//         }
//     } catch (err) {
//         console.error(err);
//         res.sendStatus(500);
//     }

//     db.end();
// };

// exports.deleteArtist = async (req, res) => {
//     const db = await getDb();
//     const { artistId } = req.params;

//     try {
//         const [[artistToDelete]] = await db.query(
//             'SELECT * FROM Artist WHERE id = ?', [ artistId, ]
//             );

//         if (!artistToDelete) {
//         res.sendStatus(404);
//         } else {
//             await db.query('DELETE FROM Artist WHERE id = ?', [artistId]);
//             res.sendStatus(200);
//         }
//     } catch (err) {
//         console.error(err);
//         res.sendStatus(500);
//     }

//     db.end();
// };


