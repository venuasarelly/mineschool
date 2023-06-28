const asynchandler = require('express-async-handler');
const StudentData = require('../../model/studentSchema');
const contactData = require('../../model/contactus');
const videoData = require('../../model/videoSchema');
const ContentData = require('../../model/content');
const dotenv = require('dotenv').config();
const { ObjectId } = require("mongodb");
const json2xls = require('json2xls');
const fs = require('fs');
const path = require('path');
const os = require('os');

 const StudentList = asynchandler(async (req, res) => {
      try {
       const admissionDetails = await StudentData.find();
      
    const jsonData = JSON.parse(JSON.stringify(admissionDetails));

    // Convert JSON to XLS
    const xls = json2xls(jsonData);
    const filePath = path.join(os.homedir(), 'Desktop', 'admission_details.xlsx');

    fs.writeFileSync(filePath, xls, 'binary');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=admission_details.xlsx');


    fs.createReadStream(filePath).pipe(res);
  } catch (e) {
    res.status(500).json({
      status: false,
      message: 'Error exporting admission details',
      error: e.message,
      data: {}
    });
  }
  })


  const  StudentsAll = asynchandler( async (req, res) => {
    try {
      const admissionDetails = await StudentData.find();
      res.status(200).json(admissionDetails);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


  const contactNotification = asynchandler( async (req, res) => {
    try {
      const contactDetails = await contactData.find();
      res.status(200).json(contactDetails);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


  const videoList = asynchandler( async (req, res) => {
    try {
      const videoDetails = await videoData.find();
      res.status(200).json(videoDetails);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

  const presentation = asynchandler(async (req, res) => {
    try {
      const { title,content,image } = req.body;
      const newSubmission = new contentData({
        title,content,image
      });
  
      const presentation = await newSubmission.save();
  
      res.status(201).json({ message: 'Content submitted successfully', submission: presentation });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});


const updatePresentation = asynchandler(async (req, res) => {
  try {
    const { title, content, image } = req.body;
    const { id } = req.params;

    
    const existingSubmission = await contentData.findById(id);
    if (!existingSubmission) {
      return res.status(404).json({ message: 'Content submission not found' });
    }

    
    existingSubmission.title = title;
    existingSubmission.content = content;
    existingSubmission.image = image;

  
    const updatedSubmission = await existingSubmission.save();

    res.status(200).json({ message: 'Content submission updated successfully', submission: updatedSubmission });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



const FancyDress = asynchandler(async (req, res) => {
  try {
    const { title,content,image } = req.body;
    const newSubmission = new contentData({
      title,content,image
    });

    const presentation = await newSubmission.save();

    res.status(201).json({ message: 'Content submitted successfully', submission: presentation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const updateFancyDress = asynchandler(async (req, res) => {
try {
  const { title, content, image } = req.body;
  const { id } = req.params;

  
  const existingSubmission = await contentData.findById(id);
  if (!existingSubmission) {
    return res.status(404).json({ message: 'Content submission not found' });
  }

  
  existingSubmission.title = title;
  existingSubmission.content = content;
  existingSubmission.image = image;


  const updatedSubmission = await existingSubmission.save();

  res.status(200).json({ message: 'Content submission updated successfully', submission: updatedSubmission });
} catch (error) {
  res.status(500).json({ error: error.message });
}
});


const  FashionShow = asynchandler(async (req, res) => {
  try {
    const { title,content,image } = req.body;
    const newSubmission = new contentData({
      title,content,image
    });

    const presentation = await newSubmission.save();

    res.status(201).json({ message: 'Content submitted successfully', submission: presentation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const  updateFashion = asynchandler(async (req, res) => {
try {
  const { title, content, image } = req.body;
  const { id } = req.params;

  
  const existingSubmission = await contentData.findById(id);
  if (!existingSubmission) {
    return res.status(404).json({ message: 'Content submission not found' });
  }

  
  existingSubmission.title = title;
  existingSubmission.content = content;
  existingSubmission.image = image;


  const updatedSubmission = await existingSubmission.save();

  res.status(200).json({ message: 'Content submission updated successfully', submission: updatedSubmission });
} catch (error) {
  res.status(500).json({ error: error.message });
}
});


const  storyTelling = asynchandler(async (req, res) => {
  try {
    const { title,content,image } = req.body;
    const newSubmission = new contentData({
      title,content,image
    });

    const presentation = await newSubmission.save();

    res.status(201).json({ message: 'Content submitted successfully', submission: presentation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const  UpdatestoryTelling = asynchandler(async (req, res) => {
try {
  const { title, content, image } = req.body;
  const { id } = req.params;

  
  const existingSubmission = await contentData.findById(id);
  if (!existingSubmission) {
    return res.status(404).json({ message: 'Content submission not found' });
  }

  
  existingSubmission.title = title;
  existingSubmission.content = content;
  existingSubmission.image = image;


  const updatedSubmission = await existingSubmission.save();

  res.status(200).json({ message: 'Content submission updated successfully', submission: updatedSubmission });
} catch (error) {
  res.status(500).json({ error: error.message });
}
});




const  rhymes = asynchandler(async (req, res) => {
  try {
    const { title,content,image } = req.body;
    const newSubmission = new contentData({
      title,content,image
    });

    const presentation = await newSubmission.save();

    res.status(201).json({ message: 'Content submitted successfully', submission: presentation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const  UpdateRhymes = asynchandler(async (req, res) => {
try {
  const { title, content, image } = req.body;
  const { id } = req.params;

  
  const existingSubmission = await contentData.findById(id);
  if (!existingSubmission) {
    return res.status(404).json({ message: 'Content submission not found' });
  }

  
  existingSubmission.title = title;
  existingSubmission.content = content;
  existingSubmission.image = image;


  const updatedSubmission = await existingSubmission.save();

  res.status(200).json({ message: 'Content submission updated successfully', submission: updatedSubmission });
} catch (error) {
  res.status(500).json({ error: error.message });
}
});


const  drawing = asynchandler(async (req, res) => {
  try {
    const { title,content,image } = req.body;
    const newSubmission = new contentData({
      title,content,image
    });

    const presentation = await newSubmission.save();

    res.status(201).json({ message: 'Content submitted successfully', submission: presentation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const  UpdateDrawing = asynchandler(async (req, res) => {
try {
  const { title, content, image } = req.body;
  const { id } = req.params;

  
  const existingSubmission = await contentData.findById(id);
  if (!existingSubmission) {
    return res.status(404).json({ message: 'Content submission not found' });
  }

  
  existingSubmission.title = title;
  existingSubmission.content = content;
  existingSubmission.image = image;


  const updatedSubmission = await existingSubmission.save();

  res.status(200).json({ message: 'Content submission updated successfully', submission: updatedSubmission });
} catch (error) {
  res.status(500).json({ error: error.message });
}
});



const  meal = asynchandler(async (req, res) => {
  try {
    const { title,content,image } = req.body;
    const newSubmission = new contentData({
      title,content,image
    });

    const presentation = await newSubmission.save();

    res.status(201).json({ message: 'Content submitted successfully', submission: presentation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const  updateMeal = asynchandler(async (req, res) => {
try {
  const { title, content, image } = req.body;
  const { id } = req.params;

  
  const existingSubmission = await contentData.findById(id);
  if (!existingSubmission) {
    return res.status(404).json({ message: 'Content submission not found' });
  }

  
  existingSubmission.title = title;
  existingSubmission.content = content;
  existingSubmission.image = image;


  const updatedSubmission = await existingSubmission.save();

  res.status(200).json({ message: 'Content submission updated successfully', submission: updatedSubmission });
} catch (error) {
  res.status(500).json({ error: error.message });
}
});

const  transport = asynchandler(async (req, res) => {
  try {
    const { title,content,image } = req.body;
    const newSubmission = new contentData({
      title,content,image
    });
    const presentation = await newSubmission.save();
    res.status(201).json({ message: 'Content submitted successfully', submission: presentation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const  UpdateTransport = asynchandler(async (req, res) => {
try {
  const { title, content, image } = req.body;
  const { id } = req.params;
 
  const existingSubmission = await contentData.findById(id);
  if (!existingSubmission) {
    return res.status(404).json({ message: 'Content submission not found' });
  }
  existingSubmission.title = title;
  existingSubmission.content = content;
  existingSubmission.image = image;
  const updatedSubmission = await existingSubmission.save();

  res.status(200).json({ message: 'Content submission updated successfully', submission: updatedSubmission });
} catch (error) {
  res.status(500).json({ error: error.message });
}
});



const  settlingBatch = asynchandler(async (req, res) => {
  try {
    const { title,content,image } = req.body;
    const newSubmission = new contentData({
      title,content,image
    });
    const presentation = await newSubmission.save();
    res.status(201).json({ message: 'Content submitted successfully', submission: presentation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const updateSettlingBatch = asynchandler(async (req, res) => {
try {
  const { title, content, image } = req.body;
  const { id } = req.params;
 
  const existingSubmission = await contentData.findById(id);
  if (!existingSubmission) {
    return res.status(404).json({ message: 'Content submission not found' });
  }
  existingSubmission.title = title;
  existingSubmission.content = content;
  existingSubmission.image = image;
  const updatedSubmission = await existingSubmission.save();

  res.status(200).json({ message: 'Content submission updated successfully', submission: updatedSubmission });
} catch (error) {
  res.status(500).json({ error: error.message });
}
});


const  playGroup2= asynchandler(async (req, res) => {
  try {
    const { title,content,image } = req.body;
    const newSubmission = new contentData({
      title,content,image
    });
    const presentation = await newSubmission.save();
    res.status(201).json({ message: 'Content submitted successfully', submission: presentation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const  updatePlayGroup2 = asynchandler(async (req, res) => {
try {
  const { title, content, image } = req.body;
  const { id } = req.params;
 
  const existingSubmission = await contentData.findById(id);
  if (!existingSubmission) {
    return res.status(404).json({ message: 'Content submission not found' });
  }
  existingSubmission.title = title;
  existingSubmission.content = content;
  existingSubmission.image = image;
  const updatedSubmission = await existingSubmission.save();

  res.status(200).json({ message: 'Content submission updated successfully', submission: updatedSubmission });
} catch (error) {
  res.status(500).json({ error: error.message });
}
});


const  playGroup3= asynchandler(async (req, res) => {
  try {
    const { title,content,image } = req.body;
    const newSubmission = new contentData({
      title,content,image
    });
    const presentation = await newSubmission.save();
    res.status(201).json({ message: 'Content submitted successfully', submission: presentation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const  updatePlayGroup3 = asynchandler(async (req, res) => {
try {
  const { title, content, image } = req.body;
  const { id } = req.params;
 
  const existingSubmission = await contentData.findById(id);
  if (!existingSubmission) {
    return res.status(404).json({ message: 'Content submission not found' });
  }
  existingSubmission.title = title;
  existingSubmission.content = content;
  existingSubmission.image = image;
  const updatedSubmission = await existingSubmission.save();

  res.status(200).json({ message: 'Content submission updated successfully', submission: updatedSubmission });
} catch (error) {
  res.status(500).json({ error: error.message });
}
});



const  playGroup4= asynchandler(async (req, res) => {
  try {
    const { title,content,image } = req.body;
    const newSubmission = new contentData({
      title,content,image
    });
    const presentation = await newSubmission.save();
    res.status(201).json({ message: 'Content submitted successfully', submission: presentation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const  updatePlayGroup4 = asynchandler(async (req, res) => {
try {
  const { title, content, image } = req.body;
  const { id } = req.params;
 
  const existingSubmission = await contentData.findById(id);
  if (!existingSubmission) {
    return res.status(404).json({ message: 'Content submission not found' });
  }
  existingSubmission.title = title;
  existingSubmission.content = content;
  existingSubmission.image = image;
  const updatedSubmission = await existingSubmission.save();

  res.status(200).json({ message: 'Content submission updated successfully', submission: updatedSubmission });
} catch (error) {
  res.status(500).json({ error: error.message });
}
});



const  playGroup5= asynchandler(async (req, res) => {
  try {
    const { title,content,image } = req.body;
    const newSubmission = new contentData({
      title,content,image
    });
    const presentation = await newSubmission.save();
    res.status(201).json({ message: 'Content submitted successfully', submission: presentation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const  updatePlayGroup5 = asynchandler(async (req, res) => {
try {
  const { title, content, image } = req.body;
  const { id } = req.params;
 
  const existingSubmission = await contentData.findById(id);
  if (!existingSubmission) {
    return res.status(404).json({ message: 'Content submission not found' });
  }
  existingSubmission.title = title;
  existingSubmission.content = content;
  existingSubmission.image = image;
  const updatedSubmission = await existingSubmission.save();

  res.status(200).json({ message: 'Content submission updated successfully', submission: updatedSubmission });
} catch (error) {
  res.status(500).json({ error: error.message });
}
});

module.exports = {
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
    UpdatestoryTelling,
    storyTelling,
    UpdateRhymes,
    rhymes,
    UpdateDrawing,
    drawing,
    updateMeal,
    meal,
    UpdateTransport,
    transport,
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
  }