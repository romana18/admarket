import PocketBase from 'pocketbase';

const url = 'https://apni-dairy-market.pockethost.io/';
const pb = new PocketBase(url);
pb.autoCancellation(false);

export const isUserValid = pb.authStore.isValid;

async function checkExistingEmail(email) {
  const result = await pb.collection('users').getList(1, 1, { filter: `email="${email}"` });
  return result.items.length > 0;
}

async function checkExistingFSSAI(fssai) {
  const result = await pb.collection('users').getList(1, 1, { filter: `FSSAI="${fssai}"` });
  return result.items.length > 0;
}

export async function signUp(username, email, password, dname, fssai, location,phone) {
  if (await checkExistingEmail(email)) {
    throw new Error('Email already exists');
  }
  
  if (await checkExistingFSSAI(fssai)) {
    throw new Error('FSSAI already exists');
  }

  const data = {
    "username": username,
    "email": email,
    "emailVisibility": true,
    "password": password,
    "passwordConfirm": password,
    "dairy_name": dname,
    "FSSAI": fssai,
    "location": location,
    "contact_number": phone
  };

  await pb.collection('users').create(data);
}

export async function logIn(email, password) {
  try {
    const authData = await pb.collection('users').authWithPassword(email, password);
    window.location.reload();
    return authData;
  } catch (error) {
    console.error('Login error:', error);
    return null;
  }
}

export async function logOut() {
  pb.authStore.clear();
  window.location.reload();
}

export async function Glogin() {
  await pb.collection('users').authWithOAuth2({ provider: 'google' });
}

export async function post(pname, price, slife, dname, quantity, fssai,location) {
  const data = {
    "product_name": pname,
    "relation": pb.authStore.model.id,
    "price": price,
    "shelf_life": slife,
    "dairy_name": dname,
    "quantity": quantity,
    "FSSAI": fssai,
    "location": location
  };

  await pb.collection('posts').create(data);
}

export async function profilelist() {
  return await pb.collection('posts').getFullList();
}

export async function userslist() {
  return await pb.collection("users").getOne(pb.authStore.model.id);
}

export async function updatepost(ep, quant, slife) {
  const data = { "shelf_life": slife, "quantity": quant };
  await pb.collection("posts").update(ep, data);
}

export async function delpost(id) {
  let confirm = window.confirm("Are you sure");
  if (!confirm) {
    return;
  }
  await pb.collection("posts").delete(id);
  window.location.reload();
}

export async function editpost() {
  const data = {
    "product_name": "test",
    "relation": "RELATION_RECORD_ID",
    "price": 123,
    "shelf_life": 123,
    "dairy_name": "test",
    "quantity": 123,
    "FSSAI": 123
  };

  await pb.collection('posts').update(id, data);
  window.location.reload();
}
