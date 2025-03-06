const FetchService = require("../services/fetch.services");

async function getAllActivities(req, res) {
  try {
    const activities = await FetchService.getAllData("Activity","TYPE_HAVE");
    console.log("Fetch complete");
    res.status(200).json(activities);
  } catch (error) {
    console.error("Error fetching activities:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getActivityById(req, res) {
  try {
    const { id } = req.params;
    const activity = await FetchService.getDataById("Activity","TYPE_HAVE", id);

    if (!activity) {
      return res.status(404).json({ message: "Activity not found" });
    }
    console.log("Fetch complete");
    res.status(200).json(activity);
  } catch (error) {
    console.error("Error fetching activity:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function pinActivityById(req, res) {
  try {
    const { id } = req.params;
    const result = await FetchService.pinDataById(id);

    // Ensure result exists and contains affectedRows
    if (!result || typeof result.affectedRows === "undefined") {
      console.log("Update failed - No valid result");
      return res.status(500).json({ error: "Database error - No update performed" });
    }

    // If no rows were affected, return 404
    if (result.affectedRows === 0) {
      console.log("Update failed - No rows affected");
      return res.status(404).json({ message: "Update Not successful" });
    }

    console.log("Update complete");

    // 🛑 Ensure no more responses are sent after this point
    if (!res.headersSent) {
      return res.status(200).json({ message: "Activity updated successfully" });
    }

  } catch (error) {
    console.error("Error updating activity:", error);

    // 🛑 Ensure the error response is not sent if a response was already sent
    if (!res.headersSent) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}


async function deleteActivityById(req, res) {
  try {
    const { id } = req.params;
    const result = await FetchService.deleteDataById("Activity", id);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Deleted Failed" });
    }
    console.log("Delete complete");
    res.status(200).json({ message: "Activity deleted successfully" });
  } catch (error) {
    console.error("Error deleting activity:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { getAllActivities, getActivityById, deleteActivityById, pinActivityById };
