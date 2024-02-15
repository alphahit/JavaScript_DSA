class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
    }

    addLast(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            return
        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
    }

    lltoarraytonumber(head){
        let current = head
        let elem = []
        while(current){
            elem.push(current.data)
            current = current.next
        }
        let num = parseInt(elem.join('')) + 1
        let arr2 = num.toString().split('')   
        this.head = null 
        for(let i = 0; i < arr2.length; i++){
            this.addLast(parseInt(arr2[i]))
        }
    }

    print(head){
        let current = head
        while(current){
            console.log(current.data)
            current = current.next
      
        }
    }

    addOne(node)
    {
        //ll reverse
        const reverse=(list)=>{
            let curr=list,prev=null;
            while(curr){
                let next=curr.next;
                curr.next=prev;
                prev=curr;
                curr=next;
            }
            return prev;
        }
        
        let reslist=new Node(),curr=reslist,carry=1;
        
        let revlist=reverse(node),temp=revlist
        
        while(temp){
            let sum=temp.data+carry;
            console.log("rsum====>",sum)
            curr.next=new Node(sum%10);
            curr=curr.next;
            carry=Math.floor(sum/10);
            temp=temp.next;
        }
        
        if(carry>0){
            curr.next=new Node(carry);
            curr=curr.next
        }
        //console.log("reverse(reslist.next)====>",reverse(reslist.next))
        return reverse(reslist.next);
    }

}

const linkedlist = new LinkedList()
linkedlist.addLast(3)
linkedlist.addLast(1)
linkedlist.addLast(8)
linkedlist.addLast(9)
//linkedlist.print(linkedlist.head)
console.log("<=======>")
// linkedlist.lltoarraytonumber(linkedlist.head)
// linkedlist.print(linkedlist.head)
linkedlist.head = linkedlist.addOne(linkedlist.head)

linkedlist.print(linkedlist.head)