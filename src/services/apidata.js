import supabase from "./supabase";

export async function getGuestData() {
  let { data, error } = await supabase.from("guestpost").select("*");
  if (error) {
    console.error(error);
    throw new Error("cabin could not be loaded");
  }
  return data;
}

export async function postGuestData(newData) {
  const { data, error } = await supabase.from("guestpost").insert([newData]);

  if (error) {
    console.error(error.message);
    throw new Error("comment could not be posted");
  }
  return data;
}

//visiters

export async function getVisiters() {
  let { data, error } = await supabase.from("visit").select("visit");

  if (error) {
    console.error(error.message);
    throw new Error("comment could not be loaded");
  }
  return data;
}

export async function postVisiters(newData) {
  // console.log("from other");
  // console.log(newData);
  const randomNumber = Math.floor(Math.random() * 4) + 1;
  const incVisit = newData + randomNumber;

  // console.log(incVisit);

  
  const { data, error } = await supabase
    .from("visit")
    .update({ visit: incVisit })
    .eq("id", 1)
    .select();

  if (error) {
    console.error(error.message);
    throw new Error("comment could not be loaded");
  }
  return data;
}


//feeds
export async function getFeeds() {
  let { data, error } = await supabase.from("feed").select("*");

  if (error) {
    console.error(error.message);
    throw new Error("feeds could not be loaded");
  }
  return data;
}