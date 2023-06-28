const express = require('express');

const {
    StudentList,
    StudentsAll,
    contactNotification,
    videoList,
    presentation,
    updatePresentation,
    FancyDress,
    updateFancyDress,
    FashionShow,
    updateFashion,
    storyTelling,
    UpdatestoryTelling,
    rhymes,
    UpdateRhymes,
    drawing,
    UpdateDrawing,
    meal,
    updateMeal,
    transport,
    UpdateTransport,
    settlingBatch,
    updateSettlingBatch,
    playGroup2,
    updatePlayGroup2,
    playGroup3,
    updatePlayGroup3,
    playGroup4,
    updatePlayGroup4,
    playGroup5,
    updatePlayGroup5

 } =require('../controller/admin/index')

const router = express.Router();

router.get('/excel', StudentList);
router.get('/all',  StudentsAll);
router.get('/notification',contactNotification);
router.get('/videolist',videoList);
router.post('/presentation', presentation);
router.put('/presentation/:id',  updatePresentation);
router.post('/dress', FancyDress);
router.put('/dress/:id',   updateFancyDress);
router.post('/fashion',  FashionShow);
router.put('/fashion/:id',   updateFashion);
router.post('/story',  storyTelling);
router.put('/story/:id',  UpdatestoryTelling);
router.post('/rhymes',    rhymes);
router.put('/rhymes/:id',   UpdateRhymes);
router.post('/drawing',     drawing);
router.put('/drawing/:id',   UpdateDrawing);
router.post('/meal',     meal);
router.put('/meal/:id',   updateMeal);
router.post('/transport',     transport);
router.put('/transport/:id',  UpdateTransport);
router.post('/settling',      settlingBatch);
router.put('/settling/:id',  updateSettlingBatch);
router.post('/group2',      playGroup2);
router.put('/group2/:id',    updatePlayGroup2);
router.post('/group3',      playGroup3);
router.put('/group3/:id',    updatePlayGroup3);
router.post('/group4',      playGroup4);
router.put('/group4/:id',    updatePlayGroup4);
router.post('/group5',      playGroup5);
router.put('/group5/:id',    updatePlayGroup5);



module.exports = router;