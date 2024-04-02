import supabase from "./supabase";


export async function getGuestData() {
  let { data, error } = await supabase.from("guestpost").select("*");
  if (error) {
    console.error(error);
    throw new Error("cabin could not be loaded");
  }
  return data;
}
