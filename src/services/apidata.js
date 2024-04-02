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
  const { data, error } = await supabase
    .from("guestpost")
    .insert([newData])
    
    if (error) {
        console.error(error.message);
        throw new Error("comment could not be posted");
      }
      return data;
}
