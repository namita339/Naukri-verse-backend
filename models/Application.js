router.post("/", async (req, res) => {

try {

const token = req.headers.authorization.split(" ")[1];
const decoded = jwt.verify(token, "secretkey");

const { title, company } = req.body;

const existingApplication = await Application.findOne({
title,
company,
userId: decoded.id
});

if(existingApplication){
return res.json({ message: "You already applied for this job!" });
}

const application = new Application({
title,
company,
userId: decoded.id
});

await application.save();

res.json({ message: "Application submitted!" });

} catch (err) {
res.status(500).json({ error: err.message });
}

});